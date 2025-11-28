# 简单词法分析器的设计与实现

## 一、实验目的
设计、编制、调试一个词法分析程序，对单词进行识别和编码，加深对词法分析原理的理解。
## 二、实验要求
设计并实现一个词法分析器，实现对指定位置的类C语言源程序文本文件的读取，并能够对该源程序中的所有单词进行分类，指出其所属类型，实现简单的词法分析操作。
例如下面为一段C语言源程序：

``` c
void main()
{
    int  a,b;
    a = 10;
    b = a + 20;
}
```
要求输出如下(可以自行分类，分类原则请在报告中说明)
```
（1，’void’）
（2，’main’）
（5，’）’）
（5，’{ ’）
（1，’int’）
（2，’a’）
（5，’,’）
（2，’b’）
（5，’;’）
（2，’a’）
（4，’=’）
（3，’10’）
（5，’;’）
（2，’b’）
（4，’=’）
（2，’a’）
（4，’+’）
（3，’20’）
（5，’;’）
（5，’}’）
```
## 三、参考设计思路
 实验的核心部分在于对源程序中单词类型的划分，因而首先需要确定目标语言中的符号和其类型。对类C语言的标识定义，根据实验要求可以得到参考设计如下：
|编码|类别|单词|
|---|---|---|
|1|关键字|if,else,void,return,do,while,for,int,char,double,float,case,cin,cout|
|2|标识符|变量名、函数名和数组名等|
|3|整形数|整数|
|4|运算符|+,-,*,/,>,<,=,!|
|5|分隔符|; , { } [ ] ( )|

各类单词对应的文法如下：
```
<标识符>∷=<字母>|_|<标识符><字母>|<标识符>_|<标识符><数字> 
<整数>∷=<整数><数字>|<数字> 
<数字>∷=0|1|2|3|…|9 
<字母>∷=A|B|C|…|Z|a|b|c|…|
<界限符>::=,|;|{|}|(|)|[|] 
<运算符>::=*|+|-|/|<|>|!
```
对应的状态转换图如下：
![alt text](../img/image.png)

根据状态转化图可实现编码，具体步骤如下：

在main.cpp中按照下面步骤完成程序编写：
``` c++
//main.cpp
#include <iostream>
#include <stdlib.h>
#include <stdio.h>
#include <string>
using namespace std;

// 定义语言相关属性-------------------
string KEYWORD[] = { "if","else","void","return","do","while","for", "int","char","double","float","case","cin","cout" }; //关键字
char SEPARATER[] = { ';',',','{','}','[',']','(',')' }; //分隔符
char OPERATOR[] = { '+','-','*','/','>','<','=','!' }; //运算符
char FILTER[] = { ' ','\t','\r','\n' }; //过滤字符
const int KEYWORD_VAL = 1;		//关键字值
const int IDENTIFIER_VAL = 2;     //标识符值
const int CONSTANT_VAL = 3;      //常量值
const int OPERATOR_VAL = 4;    //运算符值
const int SEPARATER_VAL = 5;	//分隔符值

// 声明需要的函数---------------------
void analyse(FILE * fpin);
bool IsKeyword(string str);
bool IsLetter(char ch);
bool IsDigit(char ch);
bool IsFilter(char ch);
bool IsOperator(char ch);
bool IsSeparater(char ch);

// 主函数----------------------------
int main()
{
    //从文件中读取需要分析的字符串
	char inFile[40] = "exp3_1.txt"; //根据自身修改对应路径
	FILE *fpin;
	fpin = fopen(inFile, "r");
    //如果文件打开失败，输出错误信息并退出程序
	if(fpin == NULL)
	{
		printf("文件打开失败！\n");
		exit(0);
	}
    //对文件中的字符串进行分析
	analyse(fpin);
	return 0;
}

// 分析函数----------------------------
void analyse(FILE * fpin) {
	char ch = ' ';      //存储当前字符
	string arr = "";    //用于存储当前符合的字符串
	while ((ch = fgetc(fpin)) != EOF) {    //判断文件是否读取到末尾
		arr = "";
		if (IsFilter(ch)) {}       //判断是否为过滤字符
		else if (IsLetter(ch) || ch == '_') {    
            //判断是否为关键字或标识符
			while (IsLetter(ch) || ch == '_' || IsDigit(ch)) {
				arr += ch;
				ch = fgetc(fpin);
			}
			fseek(fpin, -1L, SEEK_CUR); //回退一个字符
			if (IsKeyword(arr)) {                   //判断是否为关键字
				printf("%3d  ", KEYWORD_VAL);
				cout << arr << " 关键字" << endl;
			}
			else
			{
				printf("%3d  ", IDENTIFIER_VAL);   //标识符
				cout << arr << " 标识符" << endl;
			}
		}
		else if (IsDigit(ch)) {      //判断是否为数字
			while (IsDigit(ch) ) {
				arr += ch;
				ch = fgetc(fpin);
			}
			fseek(fpin, -1L, SEEK_CUR);  //回退一个字符 
			printf("%3d  ", CONSTANT_VAL);
			cout << arr << " 常量" << endl;
		}
		else switch (ch) {
		case '+':
		case '-':
		case '*':
		case '/':
		case '>':
		case '<':
		case '=':
		case '!':
		{
			arr += ch;
			printf("%3d  ", OPERATOR_VAL);
			cout << arr << " 运算符" << endl;
			break;
		}
		case ';':
		case ',':
		case '(':
		case ')':
		case '[':
		case ']':
		case '{':
		case '}':
		{
			arr += ch;
			printf("%3d  ", SEPARATER_VAL);
			cout << arr << " 分隔符" << endl;
			break;
		}
		default:cout << "\"" << ch << "\": 不能识别的字符" << endl;
		}
	}
}
//判断是否为关键字
bool IsKeyword(string word) {
	for (int i = 0; i < 15; i++) {
		if (KEYWORD[i] == word) {
			return true;
		}
	}
	return false;
}

//判断是否为分隔符
bool IsSeparater(char ch) {
	for (int i = 0; i < 8; i++) {
		if (SEPARATER[i] == ch) {
			return true;
		}
	}
	return false;
}


//判断是否为运算符
bool IsOperator(char ch) {
	for (int i = 0; i < 8; i++) {
		if (OPERATOR[i] == ch) {
			return true;
		}
	}
	return false;
}

//判断是否为过滤字符
bool IsFilter(char ch) {
	for (int i = 0; i < 4; i++) {
		if (FILTER[i] == ch) {
			return true;
		}
	}
	return false;
}


//判断是否为字母
bool IsLetter(char ch) {
	if ((ch >= 'A' && ch <= 'Z' )||( ch >= 'a' && ch <= 'z')) return true;
	return false;
}

//判断是否为数字        
bool IsDigit(char ch) {
	if (ch >= '0' && ch <= '9') return true;
	return false;
}
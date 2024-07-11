## Wk-1-Code-Challenge
#### Student grade generator(toy problem)
#### How It Works
The user is asked to enter the marks of a student.
The program validates the input to ensure it is a number between 0 and 100.
Based on the input, the program determines the grade using the following scale:
* Marks > 79: Grade A
* Marks 60-79: Grade B
* Marks 49-59: Grade C
* Marks 40-49: Grade D
* Marks < 40: Grade E
The program outputs the grade or an error message for invalid input.

#### Speed detector
This JavaScript program determines the status of a driver's speed based on the input and returns demerit points or a suspension message.

#### How It Works
The user inputs the speed of a car.
The program checks the speed against a limit of 70 km/h.
If the speed is:
* 70 km/h or less: returns "Ok".
* Above 70 km/h, demerit points are calculated for every 5 km/h over the limit.
* More than 130 km/h: returns "License suspended."

#### Hosted URL
https://github.com/abigail-salome/wk-1-code-challenge

#### net Salary Calculator
This JavaScript program calculates an individual's net salary based on gross salary and benefits, considering deductions for NHIF, PAYE, and NSSF.

#### Functions
1. calculateNHIF(grossSalary): Determines NHIF contributions based on the gross salary.
2. calculatePAYE(monthlyPay): Calculates the PAYE tax, considering various reliefs and tax brackets.
3. calculateNSSF(monthlySalary): Calculates NSSF contributions based on the monthly salary, including tier limits.
4. calculateNetSalary(basicSalary, benefits = 0): Computes the net salary by considering gross salary, NSSF, PAYE, and NHIF deductions.

#### Assumptions
1. It assumes the employee does not have a loan and therefore does not implement the infringement benefit tax
2. For NSSF calculations, the program assumes a pensionable pay of atleast ksh. 7,000
3. It assumes that an individual is not disabled






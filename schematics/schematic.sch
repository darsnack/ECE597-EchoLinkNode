EESchema Schematic File Version 2
LIBS:power
LIBS:device
LIBS:transistors
LIBS:conn
LIBS:linear
LIBS:regul
LIBS:74xx
LIBS:cmos4000
LIBS:adc-dac
LIBS:memory
LIBS:xilinx
LIBS:special
LIBS:microcontrollers
LIBS:dsp
LIBS:microchip
LIBS:analog_switches
LIBS:motorola
LIBS:texas
LIBS:intel
LIBS:audio
LIBS:interface
LIBS:digital-audio
LIBS:philips
LIBS:display
LIBS:cypress
LIBS:siliconi
LIBS:opto
LIBS:atmel
LIBS:contrib
LIBS:valves
EELAYER 27 0
EELAYER END
$Descr USLetter 11000 8500
encoding utf-8
Sheet 1 1
Title "Keying Circuit"
Date "17 nov 2014"
Rev "A"
Comp "Kyle Daruwalla"
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
$Comp
L R R1
U 1 1 54699B99
P 4850 4450
F 0 "R1" V 4930 4450 40  0000 C CNN
F 1 "4.7k" V 4857 4451 40  0000 C CNN
F 2 "~" V 4780 4450 30  0000 C CNN
F 3 "~" H 4850 4450 30  0000 C CNN
	1    4850 4450
	1    0    0    -1  
$EndComp
$Comp
L FDG1024NZ Q1
U 1 1 54699BF3
P 5500 4050
F 0 "Q1" H 5500 3901 40  0000 R CNN
F 1 "2N7000" H 5500 4200 40  0000 R CNN
F 2 "TO-92" H 5370 4152 29  0000 C CNN
F 3 "~" H 5500 4050 60  0000 C CNN
	1    5500 4050
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR?
U 1 1 54699C41
P 4850 4750
F 0 "#PWR?" H 4850 4750 30  0001 C CNN
F 1 "GND" H 4850 4680 30  0001 C CNN
F 2 "" H 4850 4750 60  0000 C CNN
F 3 "" H 4850 4750 60  0000 C CNN
	1    4850 4750
	1    0    0    -1  
$EndComp
$Comp
L CONN_2 J1
U 1 1 54699C74
P 3500 4200
F 0 "J1" V 3450 4200 40  0000 C CNN
F 1 "CONN_2" V 3550 4200 40  0000 C CNN
F 2 "~" H 3500 4200 60  0000 C CNN
F 3 "~" H 3500 4200 60  0000 C CNN
	1    3500 4200
	-1   0    0    -1  
$EndComp
$Comp
L CONN_2 J2
U 1 1 54699C94
P 7650 3600
F 0 "J2" V 7600 3600 40  0000 C CNN
F 1 "CONN_2" V 7700 3600 40  0000 C CNN
F 2 "~" H 7650 3600 60  0000 C CNN
F 3 "~" H 7650 3600 60  0000 C CNN
	1    7650 3600
	1    0    0    -1  
$EndComp
Wire Wire Line
	4850 4100 4850 4200
Wire Wire Line
	3850 4100 5300 4100
Wire Wire Line
	4850 4700 4850 4750
Wire Wire Line
	5600 3500 5600 3850
Wire Wire Line
	5600 3500 7300 3500
Wire Wire Line
	5600 4400 7050 4400
Wire Wire Line
	7050 4400 7050 3700
Wire Wire Line
	7050 3700 7300 3700
Connection ~ 4850 4100
Wire Wire Line
	3950 4700 4850 4700
Wire Wire Line
	3950 4700 3950 4300
Wire Wire Line
	3950 4300 3850 4300
Wire Wire Line
	5600 4250 5600 4400
Text Label 6400 3500 0    60   ~ 0
TX_Key1
Text Label 6400 4400 0    60   ~ 0
TX_Key2
Text Label 4000 4100 0    60   ~ 0
GPIO_48 (P9_15)
Text Label 4050 4700 0    60   ~ 0
DGND (P9_1)
$EndSCHEMATC

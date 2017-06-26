import React from 'react';
import Task from './XXXTask'

import './Task2.css';

const Task2 = () => {

    return (

        <div className="Module2">
            <div id="info-block-menu">
                     
            {data.map(function (task) {
                return <Task
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    className={task.className}
                    func={task.func}
                />
            })}
        </div>
         </div>
    );
}

function countOddNumbers(str) {
    let nums = str.split(' ');
    let result = "Invalid input!";
    if (nums.length !== 0 && nums.length === 2) {
        let firstNumber = +nums[0];
        let secondNumber = +nums[1];
        if (firstNumber > secondNumber) {
            secondNumber += firstNumber;
            firstNumber = secondNumber - firstNumber;
            secondNumber -= firstNumber;
        }
        if (firstNumber > 0 && secondNumber > 0) {
            result = 0;
            for (let i = firstNumber; i <= secondNumber; i++) {
                if (i % 2 !== 0) {
                    result += i;
                }
            }
        }
    }
    return result;
}

function factorial(number) {
    let result = "Invalid input";
    if (number > 0) {
        result = 1;
        for (let i = 1; i <= number; i++) {
            result *= i;
        }
        if (result === Infinity) {
            result = "Занадто велике число!"
        }
    }
    return result;
}
function heiesSequenсe(number) {
    let result = 0;
    let resultStr = [];
    if (number > 0) {
        let max = number;
        let array = [number];
        while (number !== 1) {
            if (number % 2 === 0) {
                result = number /= 2;
                resultStr.push(number + " / 2 = " + result);
            } else {
                result = number = number * 3 + 1;
                resultStr.push(number + " * 3 + 1 = " + result);
            }
            array.push(result);
            if (max < result) {
                max = result;
            }
        }
        resultStr.push("Отримана послідовність: " + array);
        resultStr.push("Кількість кроків: " + (array.length - 1));
        resultStr.push("Вершина: " + max);
        return resultStr;
    }
}

function reverseNumber(number) {
    if (number > 0) {
        let array = [], sum = 0, result = [];
        while (number > 0) {
            array.push(number % 10);
            sum += number % 10;
            number = Math.floor(number / 10);
        }
        let reverseNumber = 0;
        for (var i = array.length - 1, k = 1; i >= 0; i-- , k *= 10) {
            reverseNumber += array[i] * k;
        }
        result.push("Всього цифр: " + array.length);
        result.push("Сума цифр: " + sum);
        result.push("Зворотній порядок: " + reverseNumber);
        return result;
    }
}

const data = [
    {
        id: 1,
        func: countOddNumbers,
        title: "Сума непарних чисел",
        className: "first-task"
    },
    {
        id: 2,
        func: factorial,
        title: "Факторіал",
        className: "second-task"
    },
    {
        id: 3,
        func: heiesSequenсe,
        title: "Послідовність Хеєса",
        className: "third-task"
    },
    {
        id: 4,
        func: reverseNumber,
        title: "Розбиття на цифри",
        className: "fourth-task"
    }
];

export default Task2;
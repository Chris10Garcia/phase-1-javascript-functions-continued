// code your solution here

// saturdayFun test
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

// mondayWork test
const mondayWork = function (activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}
mondayWork(activity)


// wrapAdjective test
function wrapAdjective(wrapper = "*"){
    return function(inner="special"){
        return `You are ${wrapper}${inner}${wrapper}!`
    }
}

console.log(wrapAdjective("%")("a dedicated programmer"))
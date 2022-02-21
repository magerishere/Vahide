const useValidation = (input, rule) => {
    let isValid = true;
    let validMsg = "";
    let inputValue = input.value.trim();
    //key of conditions from rules, NOTE: external data
    let keyOfCondition;
    //value of conditions from rules, NOTE: external data
    let valueOfCondition;
    //if each rule , have no object message set empty object by default
    rule.messages = rule.messages || {};
    for (const condition of rule.conditions) {
        //separate key of conditions => example: 'max:8' => ['max',8]
        keyOfCondition = condition.split(":")[0];
        if (condition.includes(":")) {
            //set value of conditions => example: 'max:8' => ['max',8]
            valueOfCondition = condition.split(":")[1];
        }
        switch (keyOfCondition) {
            // input must have at least one value
            case "required":
                //checkbox input
                if (input.type === "checkbox") {
                    isValid = !!input.checked;
                } else {
                    //text or select input
                    isValid = !!inputValue;
                }
                //return true or false // !! change to boolean
                validMsg = rule.messages[keyOfCondition] || "این فیلد الزامی است.";
                break;
                // input must have greater than value of set
            case "min":
                if (!isValid) continue;
                isValid = inputValue.length > valueOfCondition;
                validMsg = rule.messages[keyOfCondition] || `نبايد كمتر از ${valueOfCondition} كاراكتر باشد. `; //use BackTick
                break;
                //input must match by another input value of set
            case "max":
                if (!isValid) continue;
                isValid = inputValue.length < valueOfCondition;
                validMsg = rule.messages[keyOfCondition] || `نبايد بيشتر از ${valueOfCondition} كاراكتر باشد. `; //use BackTick
                break;
            case "confirmed":
                if (!isValid) continue;
                isValid =
                    inputValue === document.getElementById(valueOfCondition).value;
                validMsg = "تكرار گذرواژه صحيح نيست!";
                break;
                //input must follow regex expression
            case "regex":
                if (!isValid) continue;
                isValid = new RegExp(valueOfCondition).test(inputValue);
                validMsg = rule.messages[keyOfCondition] || "خطا";
                break;
                //default message for rules not defined
            default:
                validMsg = "something wrong";
        }
    }
    return {
        isValid,
        validMsg,
    };
}

export default useValidation;
let callBackTimer = document.createElement("div");
callBackTimer.style.textAlign = "center";
callBackTimer.style.fontSize = "22px";
callBackTimer.style.paddingTop = "25px"
document.body.append(callBackTimer)

setTimeout(() => {
    callBackTimer.textContent = "10";

    setTimeout(() => {
        callBackTimer.textContent = "9";

        setTimeout(() => {
            callBackTimer.textContent = "8";

            setTimeout(() => {
                callBackTimer.textContent = "7";

                setTimeout(() => {
                    callBackTimer.textContent = "6";

                    setTimeout(() => {
                        callBackTimer.textContent = "5";

                        setTimeout(() => {
                            callBackTimer.textContent = "4";

                            setTimeout(() => {
                                callBackTimer.textContent = "3";

                                setTimeout(() => {
                                    callBackTimer.textContent = "2";

                                    setTimeout(() => {
                                        callBackTimer.textContent = "1";

                                        setTimeout(() => {
                                            callBackTimer.textContent = "Happy Independence Day";
                                            callBackTimer.style.color = "Orange";
                                        }, 1000);

                                    }, 1000);

                                }, 1000);

                            }, 1000);

                        }, 1000);

                    }, 1000);

                }, 1000);

            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);   
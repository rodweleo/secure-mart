const convertUSDToKsh = (currency) => {
    return (currency * 125).toLocaleString("en", {
        style: "currency",
        currency: "KES"
    });
}

export default convertUSDToKsh
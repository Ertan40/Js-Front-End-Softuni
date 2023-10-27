function main(number) {
    let total = 0;
    let str_num = number.toString();
    for (let i=0; i < str_num.length; i++) {
        total += str_num[i] * 1;
    }
    console.log (total);
}

main (245678)
main (97561)
main (543)
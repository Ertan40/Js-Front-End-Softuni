function main(...params) {
    let all_strings = ""
    params.forEach(el => {
        all_strings += el
    });
    console.log(all_strings)
} 

main ('a', 'b', 'c')
main ('%','2','o')
main ('1','5','p')
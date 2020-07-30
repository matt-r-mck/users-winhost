let users = null;

$().ready(()=>{

    getUsers();

})

const getUsers = () =>{
    let url = "http://mattmck0.w30.wh-2.com/prsappservice/api/users";
    $.getJSON(url)
        .done((res)=>{
            $("h3").fadeOut();
            console.log(res);
            users = res;
            display();
        })
}

const display = () => {
    let tbody = $("tbody");
    tbody.empty();
    for(let u of users){
        let row= $("<tr></tr>");
        tbody.append(row);
        row.append($(`<td>${u.id}</td>`));
        row.append($(`<td>${u.userName}</td>`));
        row.append($(`<td>${u.firstName} ${u.lastName}</td>`));
        row.append($(`<td>${u.phone}</td>`));
        row.append($(`<td>${u.email}</td>`));
        row.append($(`<td>${u.isReviewer ? "YES" : "NO"}</td>`));
        row.append($(`<td>${u.isAdmin ? "YES" : "NO"}</td>`));
    }
}
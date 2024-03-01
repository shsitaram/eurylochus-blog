function loadfile(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = () => {
        if (xhr.readyState === xhr.DONE && xhr.status === 200) {
            callback(xhr.responseText);
        }
    }
    xhr.send(null);
}

// load blog entries
for (let i = 1; i < 11; i++) {
    let main_node = document.createElement("div");
    main_node.setAttribute("class", "blog");
    main_node.setAttribute("id", "blog-" + i);

    let h2 = document.createElement("h2");
    h2.setAttribute("id", "blog-" + i + "-h2");
    h2.setAttribute("class", "blog-header");
    loadfile("assets/text/dates.txt", (s) => {
        h2.innerHTML = s.split("\n")[i - 1];
    });

    let p = document.createElement("p");
    p.setAttribute("id", "blog-" + i + "-p");
    p.setAttribute("class", "blog-paragraph");
    loadfile(`assets/text/blogs/${i}.txt`, (s) => {
        p.innerHTML = s.replaceAll("\n", "<br>");
    });

    main_node.appendChild(h2);
    main_node.appendChild(p);

    if (i == 2 || i == 4 || i == 8 || i == 10) {
        let h3 = document.createElement("h3");
        h3.setAttribute("id", "blog-" + i + "-h3");
        h3.setAttribute("class", "comment-header");
        h3.innerHTML = "Comments";

        let par = document.createElement("p");
        par.setAttribute("id", "blog-" + i + "-com");
        par.setAttribute("class", "comment");
        loadfile(`assets/text/comments/${i}.txt`, (s) => {
            s = s.split("\n");
            par.innerHTML = `<em><b>${s[0]} (${s[1]}):</b> ${s[2]}</em>`;
        });
        main_node.appendChild(h3);
        main_node.appendChild(par);
    }

    document.getElementById("main-blog").appendChild(main_node);
}

// load biography onto side
let title = document.createElement("h2");
title.setAttribute("id", "bio-title");
title.innerHTML = "Who am I?";

let bio_content = document.createElement("p");
bio_content.setAttribute("id", "bio-content");
loadfile("assets/text/bio.txt", (s) => {
    bio_content.innerHTML = s;
})

document.getElementById("bio").appendChild(title);
document.getElementById("bio").appendChild(bio_content);
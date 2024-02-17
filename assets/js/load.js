// load blog entries
for (let i = 1; i < 11; i++) {
    let main_node = document.createElement("div");
    main_node.setAttribute("class", "blog");
    main_node.setAttribute("id", "blog-" + i);

    let h2 = document.createElement("h2");
    h2.setAttribute("id", "blog-" + i + "-h2");
    h2.setAttribute("class", "blog-header");
    let xhr = new XMLHttpRequest();
    xhr.open("GET", 'assets/text/dates.txt', true);
    xhr.onload = () => {
        if (xhr.readyState === xhr.DONE && xhr.status === 200) {
            let s = xhr.responseText;
            s = s.split("\n");
            h2.innerHTML = s[i - 1];
        }
    }
    xhr.send(null);

    let p = document.createElement("p");
    p.setAttribute("id", "blog-" + i + "-p");
    p.setAttribute("class", "blog-paragraph");
    let xhr2 = new XMLHttpRequest();
    xhr2.open("GET", 'assets/text/blogs/' + i + '.txt', true);
    xhr2.onload = () => {
        if (xhr2.readyState === xhr2.DONE && xhr2.status === 200) {
            let s = xhr2.responseText;
            s = s.replaceAll("\n", "<br>");
            p.innerHTML = s;
        }
    }
    xhr2.send(null);


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
        let xhr3 = new XMLHttpRequest();
        xhr3.open("GET", 'assets/text/comments/' + i + '.txt', true);
        xhr3.onload = () => {
            if (xhr3.readyState == xhr3.DONE && xhr3.status == 200) {
                let s = xhr3.responseText;
                s = s.split('\n');
                par.innerHTML = '<em><b>' + s[0] + ' (' + s[1] + '):</b> ' + s[2] + '</em>';
            }
        }
        xhr3.send(null);
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
xhr = new XMLHttpRequest();
xhr.open("GET", 'assets/text/bio.txt', true);
xhr.onload = () => {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        bio_content.innerHTML = xhr.responseText;
    }
}
xhr.send(null);

document.getElementById("bio").appendChild(title);
document.getElementById("bio").appendChild(bio_content);
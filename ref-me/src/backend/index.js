const baseUrl = "https://www.citationmachine.net"
const searchLoadConfig = { childList: true , subtre: true };

window.dom = null;

function searchUrl(query) {
    return `/bibtex/cite-a-journal/search?q=${encodeURIComponent(query)}`;
}


function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open('GET', theUrl, true);
    xmlHttp.send(null);
}

function querySearchResults(lis, query) {

}

function onSearchLoad(mutationList, observer) {
    console.log(mutationList);
    // [0].querySelectorAll("li");
    observer.disconnect();
}
const searchObserver = new MutationObserver(onSearchLoad);

function playWebsite(scripts) {
    for(let i = 0; i < scripts.length; ++i) {
        let script = scripts[i];
        let exec = document.createElement("script");
    }
}

function search(query) {
    httpGetAsync(baseUrl + searchUrl(query), ret => {
        window.dom = new DOMParser().parseFromString(ret, "application/xhtml+xml");
        
        let searchList = dom.querySelector(".search-results ul");
        searchObserver.observe(searchList, searchLoadConfig);       
    });
}


search("The Magical Number Seven, Plus or Minus Two");

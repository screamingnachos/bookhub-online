async function getPosts() {
    return await fetch('https://bookhub-online.herokuapp.com/posts')
                    .then((response) => response.json())
                    .then((data) => data);
}
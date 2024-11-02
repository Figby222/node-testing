const array = [];

function testGet(req, res) {
    res.json({ array })
}

function testPost(req, res) {
    array.push(req.body.item);
    res.json({
        message: "Success!",
    });
}

export { testGet, testPost }
const getHomepage = (req, res) => {
    // process data
    // call module
    res.send('Hello World vs royhung & nodemon');
}

const getABC = (req,res) => {
    res.send('Hello World! roy hung & ABC');
}

const getRoyhung = (req,res) => {
       // res.send('<h1> hello Royhung</h1>')
       res.render('sample.ejs');
}

module.exports = {
    getHomepage, getABC, getRoyhung
}
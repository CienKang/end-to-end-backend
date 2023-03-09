const authTokenValidation = (req, res, next) => {
    const token = req.headers.authorization;
    fetch(`http://${process.env.AUTH_URL}:4000/token/validate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }).then(response => {
        if (response.status === 200) {
            next();
        } else {
            res.status(403).send('Forbidden');
        }
    }).catch(err => {
        res.status(403).send(err);
    }
    );
};

module.exports = authTokenValidation;


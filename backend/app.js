import e from 'express';

const app = e();

app.get('/api/users', (req, res) => {
    res.send({ name: 'Hema' });
});

app.listen(3000);

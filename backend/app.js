import e from 'express';
import cors from 'cors';

const app = e();

app.use(cors());

app.get('/api/users', (req, res) => {
    res.send({ name: 'Hema' });
});

app.listen(3000);

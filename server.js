const express =require('express');
const app=express();
PORT = process.env.PORT || 8780;
app.listen(PORT, () => {
    console.log(`Serveur lancé sur localhost:${PORT}`);
 });


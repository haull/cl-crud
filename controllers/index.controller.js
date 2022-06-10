module.exports = {
  index: async (req, res) => {
    const name = 'Adit, Software Engginers';
    

    return res.render('index', { name,
    title : "Dashboard",  });
  },
};

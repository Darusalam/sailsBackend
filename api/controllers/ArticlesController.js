/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    list: (req, res) => {
        Articles.find().exec((err, articles) => {
            if (err) {
                res.send(500, { err: err })
            }
            res.send(articles)
            // res.view('articles/list', {
            //     articles: articles
            //// });
        })
    },
    add: (req, res) => {
        res.view('articles/add');
    },

    create: (req, res) => {
        const title = req.body.title;
        const body = req.body.body;
        console.log(req.body);
        Articles.create({ title: title, body: body }).exec((err) => {
            if (err) {
                res.send(500, { err: err });
            }
            // res.redirect('/articles/list');
            res.send({ title: title, body: body })
        })
    },
    edit: (req, res) => {
        // console.log(req.params.id);
        
      Articles.find({ _id: req.params.id }).exec((err,article) => {
            if (err) {
                res.send(500, { err: err });
            }
            // console.log(article);
                res.send(article)
            // res.view('articles/edit',{article:article[0]});
        })
    },
    update: (req, res) => {
        const title = req.body.title;
        const body = req.body.body;
        console.log(req.body);
        // console.log(req.body.id);
        
        Articles.update({ _id: req.body.id},{title: title, body: body }).exec((err) => {
            if (err) {
                res.send(500, { err: err });
            }
            // res.redirect('/articles/list');
            res.send({id:req.body.id,title: title, body: body});
        })
    },
    delete: (req, res) => {
        console.log(req.params.id);
        Articles.destroy({ _id: req.params.id }).exec((err) => {
            if (err) {
                res.send(500, { err: err });
            }
            // res.redirect('/articles/list');
            const returnArticleId= {
                id : req.params.id
            }
            res.send(returnArticleId);
        });
        return false;
    }
};


exports.seed = function(knex, Promise) {
    return knex("crud-item").del()
        .then(function () {
            return knex("crud-item").insert([
                {
                    title: "Tensorflow",
                    content: "TensorFlow is an open-source software library for dataflow programming across a range of tasks.",
                    link: "https://www.tensorflow.org/"
                },
                {
                    title: "React",
                    content: "In computing, React is a JavaScript library for building user interfaces.",
                    link: "https://reactjs.org/"
                },
                {
                    title: "Heroku",
                    content: "Heroku is a cloud platform as a service supporting several programming languages.",
                    link: "https://www.heroku.com/"
                }
            ]);
        });
};

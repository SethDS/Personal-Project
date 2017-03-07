INSERT INTO journal
(author, title, body)
VALUES
($1, $2, $3)
RETURNING *

--         $1   req.session.user.id,
--         $2   req.body.title
--         $3   req.body.body
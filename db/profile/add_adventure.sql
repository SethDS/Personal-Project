INSERT INTO adventures
(author, title, description, directions, packlist)
VALUES
($1, $2, $3, $4, $5)
RETURNING *

--         $1   req.session.user.id,
--         $2   req.body.title,
--         $3   req.body.description,
--         $4   req.body.directions,
--         $5   req.body.packlist
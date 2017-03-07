INSERT INTO jobs
(author, job_title, job_description, job_requirements)
VALUES
($1, $2, $3, $4)
RETURNING *

--         $1   req.user.id,
--         $2   req.body.title,
--         $3   req.body.description,
--         $4   req.body.requirements
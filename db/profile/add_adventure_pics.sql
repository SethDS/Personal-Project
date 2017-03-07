INSERT INTO images
(image_file, association, association_id)
VALUES
($1, $2, $3)
RETURNING *
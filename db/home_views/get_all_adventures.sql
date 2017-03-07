SELECT adventures.adventure_id, adventures.author, adventures.title, adventures.description, adventures.directions, adventures.packlist, images.image_id, images.association,
images.association_id, images.image_file, adv_loc.adv_id, adv_loc.adv_lat, adv_loc.adv_long, adv_loc.adv_loc_id
FROM adventures
INNER JOIN images
ON adventures.adventure_id = images.association_id
INNER JOIN adv_loc
ON adv_loc.adv_id = adventures.adventure_id;
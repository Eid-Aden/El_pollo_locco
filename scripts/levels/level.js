const level1 = new Level(
  [new Chicken(), new Chicken(), new Chicken(), new Chicken(), new Chicken(), new Chicken(), new EndBoss()],
  [new Cloud()],
  [
    new Background('images/5_background/layers/air.png', -718),
    new Background('images/5_background/layers/3_third_layer/full.png', -719),
    new Background('images/5_background/layers/2_second_layer/full.png', -719),
    new Background('images/5_background/layers/1_first_layer/full.png', -719),
    // Kordhin
    new Background('images/5_background/layers/air.png', 0),
    new Background('images/5_background/layers/3_third_layer/1.png', 0),
    new Background('images/5_background/layers/2_second_layer/1.png', 0),
    new Background('images/5_background/layers/1_first_layer/1.png', 0),

    new Background('images/5_background/layers/air.png', 719),
    new Background('images/5_background/layers/3_third_layer/2.png', 719),
    new Background('images/5_background/layers/2_second_layer/2.png', 719),
    new Background('images/5_background/layers/1_first_layer/2.png', 719),

    new Background('images/5_background/layers/air.png', 716 * 2),
    new Background('images/5_background/layers/3_third_layer/2.png', 716 * 2),
    new Background('images/5_background/layers/2_second_layer/2.png', 716 * 2),
    new Background('images/5_background/layers/1_first_layer/2.png', 716 * 2),

    new Background('images/5_background/layers/air.png', 717 * 4),
    new Background('images/5_background/layers/3_third_layer/2.png', 717 * 4),
    new Background('images/5_background/layers/2_second_layer/2.png', 717 * 4),
    new Background('images/5_background/layers/1_first_layer/2.png', 717 * 4),

    new Background('images/5_background/layers/air.png', 719 * 4),
    new Background('images/5_background/layers/3_third_layer/2.png', 720 * 4),
    new Background('images/5_background/layers/2_second_layer/2.png', 720 * 4),
    new Background('images/5_background/layers/1_first_layer/2.png', 720 * 4),
  ]
);

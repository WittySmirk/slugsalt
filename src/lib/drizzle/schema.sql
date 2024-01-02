CREATE TABLE user (
    id TEXT NOT NULL PRIMARY KEY,
    googleEmail TEXT NOT NULL,
    currentQuestion TEXT,
    correct INTEGER DEFAULT 0,
    bottled INTEGER,
    lower INTEGER,
    FOREIGN KEY (currentQuestion) REFERENCES question(id)
);

CREATE TABLE user_key (
    id TEXT NOT NULL PRIMARY KEY,
    user_id TEXT NOT NULL,
    hashed_password TEXT,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE user_session (
    id TEXT NOT NULL PRIMARY KEY,
    user_id TEXT NOT NULL,
    active_expires INTEGER NOT NULL,
    idle_expires INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE white_list (
    googleEmail TEXT NOT NULL,
    bottled INTEGER NOT NULL,
    lower INTEGER NOT NULL
);

CREATE TABLE question (
    id TEXT NOT NULL PRIMARY KEY,
    question TEXT NOT NULL,
    answers TEXT NOT NULL,
    image TEXT
);
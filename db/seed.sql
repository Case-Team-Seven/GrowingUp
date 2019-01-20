use grownup;
INSERT INTO users
(first_name, last_name, username, email, password)
values('Test_First','Test_Last', 'test_username', 'grownuptest_email@mailinator.com', 'test_password');

INSERT INTO topics
(user_id, title, created)
values('1', 'Finance', '2018-12-15 12:12:12');
INSERT INTO topics
(user_id, title, created)
values('1', 'Business', '2018-12-15 12:12:12');
INSERT INTO topics
(user_id, title, created)
values('1', 'Relationships', '2018-12-15 12:12:12');
INSERT INTO topics
(user_id, title, created)
values('1', 'Savings', '2018-12-15 12:12:12');
INSERT INTO topics
(user_id, title, created)
values('1', 'Family', '2018-12-15 12:12:12');
INSERT INTO topics
(user_id, title, created)
values('1', 'Homeowner', '2018-12-15 12:12:12');



INSERT INTO tags
(name)
values('tag1');


INSERT INTO posts
(title, body, user_id, topic_id, created, updated)
values('Test Post Title', 'lorem ipsum blah blah blah......', 1, 1, '2019-01-01 12:12:00', '2019-01-01 12:12:00');

INSERT INTO comments
(body, user_id, post_id, created, updated)
values('comments comments commments', 1, 1, '2019-01-02 12:12:00', '2019-01-02 12:12:00');
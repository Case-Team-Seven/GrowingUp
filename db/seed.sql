use grownup;
INSERT INTO users
(first_name, last_name, username, email, password)
values('Test_First','Test_Last', 'test_username', 'grownuptest_email@mailinator.com', 'test_password');

INSERT INTO topics
(user_id, title, created)
values('1', 'Test Topic Title', '2018-01-07');

INSERT INTO tags
(name)
values('tag1');


INSERT INTO posts
(title, body, user_id, topic_id, created, updated)
values('Test Post Title', 'lorem ipsum blah blah blah......', 1, 1, '2019-01-07', '2019-01-08')

INSERT INTO comments
(body, user_id, topic_id, created, updated)
values('comments comments commments', 1, 1, '2019-01-07', '2019-01-08')
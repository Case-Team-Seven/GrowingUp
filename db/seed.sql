use grownup;
INSERT INTO users
(first_name, last_name, username, email, password)
values('Test_First','Test_Last', 'test_username', 'grownuptest_email@mailinator.com', 'test_password');

use grownup;
INSERT INTO topics
(user_id, title)
values('1', 'Finance');
INSERT INTO topics
(user_id, title)
values('1', 'Business');
INSERT INTO topics
(user_id, title)
values('1', 'Relationships');
INSERT INTO topics
(user_id, title)
values('1', 'Savings');
INSERT INTO topics
(user_id, title)
values('1', 'Family');
INSERT INTO topics
(user_id, title)
values('1', 'Homeowner');



INSERT INTO tags
(name)
values('tag1');


INSERT INTO posts
(title, body, user_id, topic_id)
values('Test Post Title', 'lorem ipsum blah blah blah......', 1, 1);

INSERT INTO comments
(body, user_id, post_id)
values('comments comments commments', 1, 1);
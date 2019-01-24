INSERT INTO users
(first_name, last_name, username, email, password)
values('Nic','Miesmer', 'nmiesmer', 'nic.miesmer@gmail.com', 'testPass');
INSERT INTO users
(first_name, last_name, username, email, password)
values('young','kid', 'needHelpSaving', 'helpSaving@mailinator.com', 'testPass');
INSERT INTO users
(first_name, last_name, username, email, password)
values('trade','school', 'futureCareerPath', 'futureCareerPath@mailinator.com', 'testPass');
INSERT INTO users
(first_name, last_name, username, email, password)
values('Comment','Commenter', 'adviceGiver', 'adviceGiver@mailinator.com', 'testPass');


INSERT INTO topics
(user_id, title)
values('1', 'Finance');
INSERT INTO topics
(user_id, title)
values('1', 'Education');
INSERT INTO topics
(user_id, title)
values('1', 'Social Media');
INSERT INTO topics
(user_id, title)
values('1', 'Relationships');
INSERT INTO topics
(user_id, title)
values('1', 'Partying');
INSERT INTO topics
(user_id, title)
values('1', 'Career');
INSERT INTO topics
(user_id, title)
values('1', 'Time Management');
INSERT INTO topics
(user_id, title)
values('1', 'Family');



INSERT INTO tags
(name)
values('tag1');


INSERT INTO posts
(title, body, user_id, topic_id)
values('I just got my first part time job, what is the best way to start saving money',
       'Title says it all, but I work started working part time at a grocery store.  What are effective strategies to start saving',
       2, 1);

INSERT INTO posts
(title, body, user_id, topic_id)
values('College, or Trade School?',
       'College seems to expensive, and I am not sure what my future career should be.  Are trade schools worth going to?',
       3, 2);

INSERT INTO posts
(title, body, user_id, topic_id)
values('Best careers to pursue in 2019?',
       'What are the best careers, and their career paths in 2019.',
       3, 6);

INSERT INTO posts
(title, body, user_id, topic_id)
values('Are Coding Bootcamps better than going to college?',
       'I was thinking about signing up for Coding Bootcamp program, but is it worth it?',
       3, 2);

INSERT INTO comments
(body, user_id, post_id)
values('If you want to save money, make sure to budget it.
        It is easy to spend as a kid, but it is also easy to save too if you dont have a lot of financial responsibilities.',
       4, 1);
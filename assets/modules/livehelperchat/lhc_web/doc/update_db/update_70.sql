INSERT INTO `lh_chat_config` (`identifier`, `value`, `type`, `explain`, `hidden`) VALUES ('need_help_tip_timeout','24',0,'Need help tooltip timeout, after how many hours show again tooltip?', '0');
INSERT INTO `lh_chat_config` (`identifier`, `value`, `type`, `explain`, `hidden`) VALUES ('use_secure_cookie','0',0,'Use secure cookie, check this if you want to force SSL all the time', '0');
INSERT INTO `lh_chat_config` (`identifier`, `value`, `type`, `explain`, `hidden`) VALUES ('faq_email_required','0',0,'Is visitor e-mail required for FAQ', '0');
INSERT INTO `lh_abstract_email_template` (`id`, `name`, `from_name`, `from_name_ac`, `from_email`, `from_email_ac`, `content`, `subject`, `subject_ac`, `reply_to`, `reply_to_ac`, `recipient`, `bcc_recipients`) VALUES
(6,	'New FAQ question',	'Live Helper Chat',	0,	'',	0,	'Hello,\r\n\r\nNew FAQ question\r\nEmail: {email}\r\n\r\nQuestion:\r\n{question}\r\n\r\nURL to answer a question:\r\n{url_request}\r\n\r\nSincerely,\r\nLive Support Team',	'New FAQ question',	0,	'',	0,	'',	'');
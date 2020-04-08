CREATE TABLE "User" (
	"Id"	INTEGER PRIMARY KEY AUTOINCREMENT,
	"Username"	TEXT NOT NULL,
	"PasswordHash"	byte [] NOT NULL,
	"PasswordSalt"	byte [] NOT NULL
);
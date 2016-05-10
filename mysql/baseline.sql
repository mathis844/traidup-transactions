
CREATE TABLE IF NOT EXISTS transactions (
	id INT AUTO_INCREMENT NOT NULL UNIQUE,
	have_id INT,
	want_id INT,
	status VARCHAR(25),
	created_at DATE,
	updated_at DATE,
	deleted_at DATE,
	PRIMARY KEY (id)
);

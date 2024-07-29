import pandas as pd # type: ignore
import sqlite3

def load_data_to_db(csv_file, db_file):
    df = pd.read_csv(csv_file)
    conn = sqlite3.connect(db_file)
    df.to_sql('restaurants', conn, if_exists='replace', index=False)
    conn.close()

if __name__ == "__main__":
    load_data_to_db('Zomato.csv', 'zomato.db')

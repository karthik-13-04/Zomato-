import sqlite3

def get_db_connection():
    conn = sqlite3.connect('zomato.db')
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db_connection()
    conn.execute('''
    CREATE TABLE IF NOT EXISTS restaurants (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        country_code TEXT,
        city TEXT,
        address TEXT,
        locality TEXT,
        locality_verbose TEXT,
        longitude REAL,
        latitude REAL,
        cuisines TEXT,
        average_cost_for_two INTEGER,
        currency TEXT,
        has_table_booking TEXT,
        has_online_delivery TEXT,
        is_delivering TEXT,
        switch_to_order_menu TEXT,
        price_range INTEGER,
        aggregate_rating REAL,
        rating_color TEXT,
        rating_text TEXT,
        votes INTEGER
    )
    ''')
    conn.close()

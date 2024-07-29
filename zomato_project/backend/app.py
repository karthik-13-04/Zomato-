from flask import Flask, jsonify, request # type: ignore
from database import get_db_connection # type: ignore

app = Flask(__name__)

@app.route('/api/restaurants/<int:restaurant_id>', methods=['GET'])
def get_restaurant_by_id(restaurant_id):
    conn = get_db_connection()
    restaurant = conn.execute('SELECT * FROM restaurants WHERE id = ?', (restaurant_id,)).fetchone()
    conn.close()
    if restaurant is None:
        return jsonify({'error': 'Restaurant not found'}), 404
    return jsonify(dict(restaurant))

@app.route('/api/restaurants', methods=['GET'])
def get_list_of_restaurants():
    page = request.args.get('page', 1, type=int)
    per_page = request.args.get('per_page', 10, type=int)
    
    conn = get_db_connection()
    restaurants = conn.execute('SELECT * FROM restaurants LIMIT ? OFFSET ?', (per_page, (page - 1) * per_page)).fetchall()
    conn.close()
    return jsonify([dict(restaurant) for restaurant in restaurants])

if __name__ == '__main__':
    app.run(debug=True)

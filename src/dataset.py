import os
import csv
import json

# Directory containing daily activity CSV files from https://takeout.google.com/
takeout_csv = '../../Desktop/Takeout/Fit/日別のアクティビティ指標/日別のアクティビティ指標.csv'
output_file = 'dataset.json'
date_column = '日付'
distance_column = '距離（m）'

# Read the CSV file
with open(takeout_csv, mode='r', encoding='utf-8') as file:
    csv_reader = csv.DictReader(file)
    distances = {row[date_column]: float(row[distance_column]) for row in csv_reader if row[distance_column] and row[date_column]}

# Save to JSON file
with open(output_file, mode='w', encoding='utf-8') as json_file:
    json.dump(distances, json_file)
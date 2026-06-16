#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import re
import json

# 读取HTML文件
with open('/workspaces/411027.student/wiki.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

# 定义支线信息存储
branch_lines = {}

# 方法：使用更简单的正则匹配来查找支线和车站

# 1. 深澳線
match = re.search(r'深澳線.*?</a></th><td[^>]*><div[^>]*>([^<]*瑞芳[^<]*)</div>', html_content, re.DOTALL)
if match:
    text = match.group(1)
    stations = re.findall(r'>([^<]+)</a>', text)
    branch_lines['深澳線'] = stations
    print(f"深澳線: {stations}")

# 2. 平溪線 - 已有JSON文件
with open('/workspaces/411027.student/stations_平溪線.json', 'r', encoding='utf-8') as f:
    branch_lines['平溪線'] = json.load(f)
    print(f"平溪線: {branch_lines['平溪線']}")

# 3. 內灣線
match = re.search(r'內灣線.*?</a></th><td[^>]*><div[^>]*>([^<]*新竹[^<]*)</div>', html_content, re.DOTALL)
if match:
    text = match.group(1)
    stations = re.findall(r'>([^<]+)</a>', text)
    branch_lines['內灣線'] = stations
    print(f"內灣線: {stations}")

# 4. 集集線
match = re.search(r'集集線.*?</a></th><td[^>]*><div[^>]*>([^<]*二水[^<]*)</div>', html_content, re.DOTALL)
if match:
    text = match.group(1)
    stations = re.findall(r'>([^<]+)</a>', text)
    branch_lines['集集線'] = stations
    print(f"集集線: {stations}")

# 5. 臺中臨港線
match = re.search(r'臺中臨港線.*?</a></th><td[^>]*><div[^>]*>([^<]*臺中港[^<]*)</div>', html_content, re.DOTALL)
if match:
    text = match.group(1)
    stations = re.findall(r'>([^<]+)</a>', text)
    branch_lines['台中臨港線'] = stations
    print(f"台中臨港線: {stations}")

# 6. 花蓮臨港線
match = re.search(r'花蓮臨港線.*?</a></th><td[^>]*><div[^>]*>([^<]*北埔[^<]*)</div>', html_content, re.DOTALL)
if match:
    text = match.group(1)
    stations = re.findall(r'>([^<]+)</a>', text)
    branch_lines['花蓮臨港線'] = stations
    print(f"花蓮臨港線: {stations}")

# 保存结果
print("\n=== 最终结果 ===")
for line_name, stations in branch_lines.items():
    print(f"{line_name}: {', '.join(stations)}")

# 保存为JSON
with open('/workspaces/411027.student/extracted_branches.json', 'w', encoding='utf-8') as f:
    json.dump(branch_lines, f, ensure_ascii=False, indent=2)
    print("\n结果已保存到 extracted_branches.json")

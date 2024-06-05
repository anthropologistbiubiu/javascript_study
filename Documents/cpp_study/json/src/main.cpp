//
// Created by 哈哈哈 on 2023/7/25.
//
#include <iostream>
#include <nlohmann/json.hpp>

int main() {
    // 创建 JSON 对象并序列化为字符串
    nlohmann::json json_data = {
            {"key", "value"}
    };
    std::string json_str = json_data.dump();

    // 输出 JSON 字符串
    std::cout << "JSON Data: " << json_str << std::endl;

    return 0;
}

cmake_minimum_required(VERSION 3.5)
project(MyProject)

# 添加可执行文件
add_executable(my_program src/main.cpp)

# 添加第三方 JSON 库（这里以 nlohmann/json 为例）
include(FetchContent)
FetchContent_Declare(
    json
    GIT_REPOSITORY https://github.com/nlohmann/json.git
    GIT_TAG v3.10.4  # 可选，指定特定的版本
)
FetchContent_MakeAvailable(json)

# 链接 JSON 库
target_link_libraries(my_program PRIVATE nlohmann_json::nlohmann_json)

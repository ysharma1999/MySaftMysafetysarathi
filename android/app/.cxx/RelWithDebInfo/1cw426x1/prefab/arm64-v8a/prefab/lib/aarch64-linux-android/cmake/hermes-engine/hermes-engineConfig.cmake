if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/yogesh/.gradle/caches/8.10.2/transforms/39c26d2fb5f7c844307c94f24d9fffd7/transformed/hermes-android-0.77.1-release/prefab/modules/libhermes/libs/android.arm64-v8a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/yogesh/.gradle/caches/8.10.2/transforms/39c26d2fb5f7c844307c94f24d9fffd7/transformed/hermes-android-0.77.1-release/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()


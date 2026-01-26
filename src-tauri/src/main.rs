// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {

    tauri::Builder::default()
        .plugin(tauri_plugin_sql::Builder::default().build())
        // ... other configurations
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
    
    brain_beaver_lib::run()
}

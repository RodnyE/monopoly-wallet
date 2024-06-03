#!/bin/bash

# Preguntar si quiere compilar el proyecto
read -p "Do you want to compile the project? (y/n) " response

# Preguntar el nombre del proyecto
read -p "Enter the project name (default: Monopoly-Wallet) " project_name

if [ "$response" = "y" ]; then
  # Ejecutar npm run build
  npm run build
fi

# Asignar el nombre del proyecto por defecto si no se ingresa nada
project_name=${project_name:-Monopoly-Wallet}

# Copiar y sobreescribir el contenido de la carpeta dist
cp -r dist/* /sdcard/DroidScript/$project_name

echo 'Finish!'
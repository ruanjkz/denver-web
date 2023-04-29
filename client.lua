RegisterCommand("admin-chest", function(args)
    local ped = PlayerPedId()
    if not IsPedInAnyVehicle(ped) and args[1] then
        if vSERVER.checkIntPermissions("Owner") and chestOpen == "" then
            print(args[1])
            chestOpen = args[1]
            SetNuiFocus(true, true)
            SendNUIMessage({ action = "showMenu" })
            TriggerEvent("vrp_sound:source", "chest", 0.1)
        end
    end
end)
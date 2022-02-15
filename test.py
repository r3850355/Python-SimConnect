from SimConnect import *
# Create SimConnect link
sm = SimConnect()
# Creat a function to call the MobiFlight AS1000_MFD_SOFTKEYS_3 event.
Sk3 = Event(b'MobiFlight.AS530_FPL_Push', sm)
# Call the Event.
Sk3()
sm.exit()
quit()
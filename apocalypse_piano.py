
import network
import urequests
import utime
import ujson
from machine import Pin
import time
 
button = Pin(3, Pin.IN, Pin.PULL_UP)
buzzer = Pin(11, Pin.OUT)


notepure = 0

wlan = network.WLAN(network.STA_IF)
wlan.active(True)

ssid = 'Pierro-Access-point'
password = '123456789'
wlan.connect(ssid, password)
print(wlan.isconnected())
url = "http://192.168.4.6:3000/notesend"

def playNote(notepure):
  if notepure == 1:
      buzzer.on()
      time.sleep(0.2)
      buzzer.off()
      tone(buzzerfrequence[330],500)
    
      print('sing1')
        
  elif notepure == 2:
      buzzer.on()
      time.sleep(0.2)
      buzzer.off()
      print('sing2')
      # Jouer la deuxième note ici
  elif notepure == 3:
      buzzer.on()
      time.sleep(0.2)
      buzzer.off()
      print('sing3')
      # Jouer la troisième note ici
    

while not wlan.isconnected():
    print("no co")
    utime.sleep(1)

while(True):
    try:
        r = urequests.get(url)
        notepure = (r.json()['data'])
        print(notepure)
        playNote(int(notepure))
        
        
        utime.sleep(0.1)
            
    except Exception as e:
        print(e)

GPIO.cleanup()

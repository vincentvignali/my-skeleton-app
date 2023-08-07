
.PHONY: appStart
VERSION=00.00.01
.SILENT: appStart


define HEADER
======================================
||                                  ||
|| 🚀 SvelteKit Server has started  ||
||                                  ||
|| 💾 PocketBase server has started ||
||                                  ||
||  Check out your terminal tabs !  ||		
||                                  ||
======================================
endef
export HEADER
#----------------------------------------------------------------------------------

appStart :  
	@gnome-terminal --wait --tab --title="PocketBase Server" -- bash -c 'make -s pocketStart; $SHELL' &
		@gnome-terminal --wait --tab --title="SvelteKit Server" -- bash -c 'npm run dev; $SHELL' &
			@wait & 
				clear;
				@echo "$$HEADER"
#----------------------------------------------------------------------------------
svelteStart :  @npm run dev
#----------------------------------------------------------------------------------
pocketStart:
	@cd ./.. ;\
		cd ./PocketDb/ ;\
			exec ./pocketbase serve ;\ 
